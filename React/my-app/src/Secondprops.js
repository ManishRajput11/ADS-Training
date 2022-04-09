import Firstprops from './first project/Componenets/Firstprops';

function App(){
    let expenseDate = new Date(2022, 3, 19);
    let expenseTitle = "School fee";
    let expenseAmount = 250;

    return (
        <div>
            <h2>Let's get started</h2>
        
        <Firstprops>
            date={expenseDate}
            title={expenseTitle}
            amount={expenseAmount}

        </Firstprops>
        </div>
    );  
}

export default Secondprops;