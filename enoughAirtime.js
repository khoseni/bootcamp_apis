

function enoughAirtime(projectedUsage, airtimeAvailable) {
    const usageArray = projectedUsage.split(',');
    let totalCost = 0;
    
    for (const item of usageArray) {
        if (item === 'call') {
            totalCost += 1.88;
        } else if (item === 'sms') {
            totalCost += 0.75;
        } else if (item === 'data') {
            totalCost += 12;
        }
    }
    
    const airtimeLeft = airtimeAvailable - totalCost;
    return airtimeLeft > 0 ? airtimeLeft.toFixed(2) : '0.00';
}
export {enoughAirtime}