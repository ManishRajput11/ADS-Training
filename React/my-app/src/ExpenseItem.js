import './ExpenseItem.css';
function Expenseitem() {
    const expenseDate= new Date(22,2,31);
    const expenseTitle= 'car Insurance';
    const expenseAmount= 200;


        return (

        <div >
            <div className='expense-item'>
                <div>{expenseDate.toISOString()}</div>

            
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
            </div>
            <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>

    )
}

export default Expenseitem;