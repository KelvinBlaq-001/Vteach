<template>
  <div class="earnings-container">
    <h1 class="page-title">My Earnings</h1>

    <!-- Filter + Currency -->
    <div class="filter-row">
      <label>
        Currency:
        <select v-model="selectedCurrency">
          <option value="₦">₦ NGN</option>
          <option value="$">$ USD</option>
          <option value="€">€ EUR</option>
          <option value="£">£ GBP</option>
        </select>
      </label>

      <label>
        Month:
        <input type="month" v-model="selectedMonth" />
      </label>

      <label>
        Date Range:
        <input type="date" v-model="startDate" />
        <span>to</span>
        <input type="date" v-model="endDate" />
      </label>
    </div>

    <!-- Summary Cards -->
    <div class="summary-cards">
      <div class="card">
        <h2>Total Earnings</h2>
        <p>{{ selectedCurrency }}{{ totalEarnings.toLocaleString() }}</p>
      </div>
      <div class="card">
        <h2>Pending Payout</h2>
        <p>{{ selectedCurrency }}{{ pendingPayout.toLocaleString() }}</p>
      </div>
      <div class="card">
        <h2>Withdrawable</h2>
        <p>{{ selectedCurrency }}{{ withdrawableBalance.toLocaleString() }}</p>
      </div>
    </div>

    <!-- Withdraw Form -->
    <div class="withdraw-section">
      <h2>Withdraw Funds</h2>
      <div class="withdraw-form">
        <label>Amount:</label>
        <input
          type="number"
          v-model.number="withdrawAmount"
          :max="withdrawableBalance"
          placeholder="Enter amount"
        />
        <button
          class="btn withdraw-btn"
          :disabled="!canWithdraw"
          @click="submitWithdrawal"
        >
          Withdraw {{ selectedCurrency }}
        </button>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="action-buttons">
      <button class="btn" @click="downloadCSV">📄 CSV</button>
      <button class="btn" @click="downloadPDF">🧾 PDF</button>
      <button class="btn" @click="downloadImage">🖼️ Image</button>
    </div>

    <!-- Earnings List -->
    <div id="earnings-data" class="earning-list">
      <h2>Earning Breakdown</h2>
      <div v-if="filteredEarnings.length" class="earning-cards">
        <div
          v-for="(earning, index) in filteredEarnings"
          :key="index"
          class="earning-card"
        >
          <h3>{{ earning.courseTitle }}</h3>
          <p><strong>Amount:</strong> {{ selectedCurrency }}{{ earning.amount }}</p>
          <p><strong>Type:</strong> {{ earning.type }}</p>
          <p><strong>Date:</strong> {{ earning.date }}</p>
          <p><strong>Students:</strong> {{ earning.students }}</p>
        </div>
      </div>
      <p v-else>No earnings found for selected filters.</p>
    </div>

    <!-- Notifications -->
    <div v-if="notification" class="notifications">
      <p :class="notificationType">{{ notification }}</p>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';

export default {
  data() {
    return {
      selectedCurrency: '₦',
      selectedMonth: '',
      startDate: '',
      endDate: '',
      withdrawAmount: '',
      totalEarnings: 42000,
      pendingPayout: 15000,
      withdrawableBalance: 27000,
      notification: '',
      notificationType: '',
      earnings: [
        {
          courseTitle: 'JavaScript Mastery',
          amount: 10000,
          date: '2025-05-01',
          type: 'Online Course',
          students: 12,
        },
        {
          courseTitle: 'Live Web Dev Class',
          amount: 8000,
          date: '2025-05-15',
          type: 'Live Class',
          students: 5,
        },
        {
          courseTitle: 'Offline UI Design Class',
          amount: 5000,
          date: '2025-04-29',
          type: 'Offline Course',
          students: 7,
        },
      ],
    };
  },
  computed: {
    filteredEarnings() {
      return this.earnings.filter((e) => {
        const eDate = new Date(e.date);
        const start = this.startDate ? new Date(this.startDate) : null;
        const end = this.endDate ? new Date(this.endDate) : null;
        const matchMonth = this.selectedMonth
          ? e.date.startsWith(this.selectedMonth)
          : true;
        const inRange =
          (!start || eDate >= start) && (!end || eDate <= end);
        return matchMonth && inRange;
      });
    },
    canWithdraw() {
      return (
        this.withdrawAmount > 0 &&
        this.withdrawAmount <= this.withdrawableBalance
      );
    },
  },
  methods: {
    submitWithdrawal() {
      if (!this.canWithdraw) {
        this.notification = 'Invalid withdrawal amount.';
        this.notificationType = 'error';
        return;
      }
      this.withdrawableBalance -= this.withdrawAmount;
      this.notification = `Withdrawal of ${this.selectedCurrency}${this.withdrawAmount} submitted.`;
      this.notificationType = 'success';
      this.withdrawAmount = '';
    },
    downloadCSV() {
      const rows = this.filteredEarnings.map((e) => [
        e.courseTitle,
        e.type,
        e.date,
        e.students,
        `${this.selectedCurrency}${e.amount}`,
      ]);
      let csvContent = 'data:text/csv;charset=utf-8,';
      csvContent += 'Course,Type,Date,Students,Amount\n';
      rows.forEach((rowArray) => {
        csvContent += rowArray.join(',') + '\n';
      });
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'earnings.csv');
      document.body.appendChild(link);
      link.click();
      this.notification = 'CSV downloaded.';
      this.notificationType = 'info';
    },
    downloadPDF() {
      const doc = new jsPDF();
      doc.text('Earnings Report', 14, 10);
      doc.autoTable({
        head: [['Course', 'Type', 'Date', 'Students', 'Amount']],
        body: this.filteredEarnings.map((e) => [
          e.courseTitle,
          e.type,
          e.date,
          e.students,
          `${this.selectedCurrency}${e.amount}`,
        ]),
        startY: 20,
      });
      doc.save('earnings.pdf');
      this.notification = 'PDF downloaded.';
      this.notificationType = 'info';
    },
    downloadImage() {
      const el = document.getElementById('earnings-data');
      html2canvas(el).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'earnings.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        this.notification = 'Image downloaded.';
        this.notificationType = 'info';
      });
    },
  },
};
</script>

<style scoped>
.earnings-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Inter', sans-serif;
  color: #333;
}

.page-title {
  font-size: 2rem;
  font-weight: 600;
  color: #0077cc;
  text-align: center;
  margin-bottom: 2rem;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 2rem;
  background: #f9fbfc;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.filter-row label {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  flex: 1;
  min-width: 140px;
}

.filter-row input,
.filter-row select {
  margin-top: 0.4rem;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 0.9rem;
}

.summary-cards {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.card {
  background: #ffffff;
  flex: 1;
  min-width: 220px;
  padding: 1.2rem;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 123, 255, 0.1);
  border-left: 5px solid #007bff;
}

.card h2 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #444;
}

.card p {
  font-size: 1.4rem;
  font-weight: 600;
  color: #007bff;
}

.withdraw-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: #f4fff8;
  border-left: 5px solid #28a745;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
}

.withdraw-section h2 {
  margin-bottom: 1rem;
  color: #28a745;
}

.withdraw-form {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.withdraw-form input {
  flex: 1;
  min-width: 160px;
  padding: 0.6rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.withdraw-btn {
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}
.withdraw-btn:hover {
  background-color: #218838;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn {
  background: #f0f0f0;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}
.btn:hover {
  background: #e0e0e0;
}

.earning-list h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #0077cc;
}

.earning-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.earning-card {
  background: #fff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border-left: 5px solid #28a745;
}

.earning-card h3 {
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.earning-card p {
  font-size: 0.95rem;
  margin: 0.2rem 0;
}

.notifications {
  margin-top: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.success {
  background: #e6ffed;
  color: #218838;
}

.error {
  background: #ffe6e6;
  color: #cc0000;
}

.info {
  background: #e6f0ff;
  color: #004085;
}

/* Mobile Responsive */
@media screen and (max-width: 600px) {
  .filter-row,
  .withdraw-form,
  .summary-cards,
  .action-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .filter-row label,
  .withdraw-form input {
    width: 100%;
  }

  .withdraw-btn {
    width: 100%;
  }
}
</style>
