function createAccount(pin, amount) {
    let acctPin = pin;
    let accAmount = amount || 0;

    return {
        checkBalance(pin) {
            if (pin == acctPin) {
                return `$${accAmount}`;
            }
            else {
                return "Invalid PIN.";
            }
        },
        deposit(pin, amount) {
            if (pin == acctPin) {
                accAmount += amount;
                return `Successfully deposited $${amount}. Current balance: $${accAmount}.`;
            }
            else {
                return "Invalid PIN.";
            }
        },
        withdraw(pin, amount) {

            if (pin == acctPin) {
                if (amount <= accAmount) {
                    accAmount -= amount;
                    return `Successfully withdrew $${amount}. Current balance: $${accAmount}.`;
                }
                else {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                }
            }
            else {
                return "Invalid PIN.";
            }
        },
        changePin(pin, newPin) {
            if (pin == acctPin) {
                acctPin = newPin;
                return `PIN successfully changed!`;
            }
            else {
                return "Invalid PIN.";
            }
        }
    }
}
module.exports = { createAccount };
