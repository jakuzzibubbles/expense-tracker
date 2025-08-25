import React, { useState, useEffect } from 'react';
import { useUserAuth } from "../../hooks/useUserAuth";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { toast } from "react-hot-toast";
import ExpenseOverview from '../../components/Expense/ExpenseOverview'; 
import Modal from '../../components/Modal';
import AddExpenseForm from '../../components/Expense/AddExpenseForm';

const Expense = () => {
  useUserAuth();

  const [expenseData, setExpenseData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);

  // Get all Expense details
  const fetchExpenseDetails = async () => {
    if (loading) return;

    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.EXPENSE.GET_ALL_EXPENSE}`
      );

      if (response.data) {
        setExpenseData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error);
    } finally {
      setIsLoading(false);
    }
  };

  // handle Add Expense
  const handleAddExpense = async (expense) => {
    const { category, amount, date, icon } = expense;

    // Validation checks
    if (!category.trim()) {
      toast.error("Category is required.");
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }
    if (!date) {
      toast.error("Date is required.");
      return;
    }
    try {
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, {
        category,
        amount,
        date,
        icon,
      });

      setOpenAddExpenseModal(false);
      toast.success("Expense added successfully!");
      fetchExpenseDetails();
    } catch (error) {
      console.error(
        "Error adding Expense.",
        error.response?.data?.message || error.message
      );
    }
  };

  useEffect(() => {
    fetchExpenseDetails();
  
    return () => {};
  }, []);
  

  return (
    <DashboardLayout activeMenu="Expenses">
      <div className="my-5 mx-auto">
        <div className='grid grid-cols-1 gap-6'>
          <div className=''>
            <ExpenseOverview
              transactions= {expenseData}
              onExpenseIncome={() => setOpenAddExpenseModal(true)}
              />
          </div>
        </div>

        <Modal
          isOpen={openAddExpenseModal}
          onClose={() => setOpenAddExpenseModal(false)}
          title="Add Expense"
          >
            <AddExpenseForm onAddExpense={handleAddExpense} />
          </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Expense;