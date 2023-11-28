let balance = 0;
 let totalSpent = 0;

        function addIncome() {
            let description = document.getElementById("desp1").value;
            let income = parseFloat(document.getElementById("inco").value);
        alert('Income added successfully')
            balance += income;
            
            updateBalance();
            
            let resultTable = document.getElementById("result");
            resultTable.innerHTML +=`
                                    <tr>
                                    <td>${description}</td>
                                    <td>${income}</td>
                                    <td>${balance}</td></tr>`
        
            
        }

        function addExpense() {
            let description = document.getElementById("expenseDescription").value;
            let expense = parseFloat(document.getElementById("expenseAmount").value);
            alert('Expense added successfully')
            balance -= expense;
            totalSpent += expense;
            updateBalance();
            
            let resultTable = document.getElementById("result1");
            resultTable.innerHTML += `
            <tr>
            <td>${description}</td>
            <td>${expense}</td>
            <td>${balance}</td></tr>`
            
           
        }

        function updateBalance() {
            document.getElementById("balance").innerText = balance;
            document.getElementById("totalSpent").innerText = totalSpent;
        }
function logOut(){
    window.location='./login.html'
}