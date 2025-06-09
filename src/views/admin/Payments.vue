<template>
  <div class="admin-payment">
    <h1>Payments Dashboard</h1>

    <!-- Search -->
    <input
      v-model="searchQuery"
      placeholder="Search teacher or student by name"
      class="search-bar"
      type="search"
      aria-label="Search teacher or student by name"
    />

    <!-- PENDING TEACHER PAYOUTS -->
    <section>
      <h2>Pending Teacher Payout Requests</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Teacher</th>
              <th>Amount</th>
              <th>Requested On</th>
              <th>Status</th>
              <th class="action-col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="req in filteredPendingRequests" :key="req.id">
              <td data-label="Teacher">{{ req.teacher.name }}</td>
              <td data-label="Amount">₦{{ req.amount.toLocaleString() }}</td>
              <td data-label="Requested On">{{ req.date }}</td>
              <td data-label="Status">
                <span class="status" :class="req.status.toLowerCase()">{{ req.status }}</span>
              </td>
              <td data-label="Action" class="action-col">
                <RouterLink :to="`/admin/teachers/${req.teacher.id}`" class="profile-link">Profile</RouterLink>
                <button v-if="req.status === 'Pending'" @click="markAsPaid(req)" class="mark-paid-btn">
                  Mark as Paid
                </button>
              </td>
            </tr>
            <tr v-if="filteredPendingRequests.length === 0">
              <td colspan="5" class="no-data">No matching payout requests found.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- STUDENT PURCHASES -->
    <section>
      <h2>Student Purchases</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Item</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="purchase in filteredStudentPurchases" :key="purchase.id">
              <td data-label="Student">{{ purchase.studentName }}</td>
              <td data-label="Item">{{ purchase.item }}</td>
              <td data-label="Amount">₦{{ purchase.amount.toLocaleString() }}</td>
              <td data-label="Date">{{ purchase.date }}</td>
              <td data-label="Type">{{ purchase.type }}</td>
            </tr>
            <tr v-if="filteredStudentPurchases.length === 0">
              <td colspan="5" class="no-data">No matching student purchases found.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Search Query
const searchQuery = ref('')

// Dummy Teacher Data
const teachers = ref([
  {
    id: 1,
    name: 'John Doe',
    paymentRequests: [
      { id: 101, amount: 12000, date: '2025-06-06', status: 'Pending' },
      { id: 102, amount: 8000, date: '2025-05-30', status: 'Paid' },
      { id: 103, amount: 15000, date: '2025-05-25', status: 'Declined' }
    ]
  },
  {
    id: 2,
    name: 'Jane Smith',
    paymentRequests: [
      { id: 104, amount: 7000, date: '2025-06-01', status: 'Pending' }
    ]
  },
  {
    id: 3,
    name: 'Michael Lee',
    paymentRequests: []
  }
])

// Dummy Student Purchase Data
const studentPurchases = ref([
  {
    id: 201,
    studentName: 'Alice Johnson',
    item: 'Online Course - Web Dev',
    amount: 15000,
    date: '2025-06-01',
    type: 'Course'
  },
  {
    id: 202,
    studentName: 'Bob Marley',
    item: 'Certificate - React Basics',
    amount: 3000,
    date: '2025-06-02',
    type: 'Certificate'
  },
  {
    id: 203,
    studentName: 'Cindy Wu',
    item: 'Live Class - Advanced CSS',
    amount: 5000,
    date: '2025-06-04',
    type: 'Live Class'
  }
])

// Flatten teacher payment requests with teacher info
const pendingRequests = computed(() => {
  return teachers.value.flatMap(t =>
    t.paymentRequests.map(req => ({
      ...req,
      teacher: { id: t.id, name: t.name }
    }))
  )
})

// Filter pending requests by search query (case insensitive)
const filteredPendingRequests = computed(() =>
  pendingRequests.value.filter(req =>
    req.teacher.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

// Filter student purchases by search query (case insensitive)
const filteredStudentPurchases = computed(() =>
  studentPurchases.value.filter(p =>
    p.studentName.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

// Mark a payout request as paid
const markAsPaid = (req) => {
  const teacher = teachers.value.find(t => t.id === req.teacher.id)
  const targetReq = teacher.paymentRequests.find(r => r.id === req.id)
  if (targetReq) {
    targetReq.status = 'Paid'
    alert(`Marked ${req.teacher.name}'s ₦${req.amount.toLocaleString()} as paid.`)
  }
}
</script>

<style scoped>
.admin-payment {
  padding: 20px;
  background: white;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  color: #222;
}
h1 {
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 20px;
}
h2 {
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 12px;
}

/* Search Bar */
.search-bar {
  padding: 10px 12px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 400px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  box-sizing: border-box;
}

/* Table Wrapper to enable horizontal scroll on small screens */
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}

th, td {
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  text-align: left;
  vertical-align: middle;
  font-size: 0.9rem;
}

/* Status labels */
.status {
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 6px;
  display: inline-block;
  text-transform: capitalize;
  font-size: 0.85rem;
  user-select: none;
  white-space: nowrap;
}
.status.pending {
  background-color: #fff3cd;
  color: #856404;
}
.status.paid {
  background-color: #d4edda;
  color: #155724;
}
.status.declined {
  background-color: #f8d7da;
  color: #721c24;
}

/* Buttons */
button {
  padding: 6px 14px;
  margin-left: 10px;
  background-color: #2978f0;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #0056b3;
}

/* Profile link style */
.profile-link {
  color: #2978f0;
  font-weight: 600;
  text-decoration: none;
}
.profile-link:hover {
  text-decoration: underline;
}

/* Action column width */
.action-col {
  min-width: 130px;
  white-space: nowrap;
}

/* No data row */
.no-data {
  text-align: center;
  font-style: italic;
  color: #666;
  padding: 16px;
}
/* ...keep existing styles above unchanged... */

/* Responsive: Make table rows card-style on small screens */
@media (max-width: 720px) {
  table {
    width: 100%;
    min-width: unset;
  }
  thead {
    display: none;
  }
  tbody tr {
    display: block;
    background: #fff;
    margin-bottom: 16px;
    padding: 16px 20px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border: 1px solid #e0e0e0;
  }
  td {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border: none;
    font-size: 1rem;
    line-height: 1.3;
  }
  td[data-label]::before {
    content: attr(data-label);
    font-weight: 700;
    color: #444;
    flex: 1;
  }
  /* Action column: stack vertically */
  .action-col {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;
    justify-content: flex-start;
  }
  button {
    width: 100%;
    margin: 0;
    padding: 10px 0;
    font-weight: 600;
    border-radius: 8px;
  }
  .profile-link {
    color: #2978f0;
    font-weight: 600;
    margin-bottom: 8px;
    text-align: center;
    display: block;
  }
  /* Status badge bigger */
  .status {
    font-size: 0.95rem;
    padding: 6px 12px;
    border-radius: 10px;
  }
  .no-data {
    padding: 24px 12px;
    font-size: 1.1rem;
  }
}
</style>