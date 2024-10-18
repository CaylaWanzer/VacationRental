
document.addEventListener("DOMContentLoaded", () => {
    
    const overnightForm = document.getElementById("overnightForm");
    const when = document.getElementById("when");
    const output = document.getElementById("output");
    const nights = document.getElementById("nights");
    // const selectedRoom = document.querySelector('input[name="room"]:checked');


    overnightForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        const room = document.querySelector('input[name="room"]:checked');
        const selectedDiscount = document.querySelector('input[name="discount"]:checked');
        const checkInDate = new Date(when.value)
        const month = checkInDate.getMonth();
        const isPeak = month >= 5 && month <=7;
        let rate = 0
        if(isPeak){
            if("suite" === room){
                rate = 350
            }else{
                rate = 250
            }
        }else{
            if("suite" === room){
                rate = 210
            }else{
                rate = 150 
            }
        }
        output.innerText = isPeak + " " + room

        output.innerText = when.value + " " + selectedRoom.value

        let total = 0
        let numberOfDays =  Number(nights.value)
        const outSeasonQueen = 150.00
        const outSeasonKing = 150.00
        const outSeasonSuite = 210.00
        const inSeasonQueen = 250.00
        const inSeasonKing = 250.00
        const inSeasonSuite = 350.00

        let rate = 0
        
        if(selectedRoom.value == "queen"){
            rate = outSeasonQueen
        }else if(selectedRoom.value == "king"){
            rate = outSeasonKing
        }else if (selectedRoom.value == "suite"){
            rate = outSeasonSuite
        }
            total = (rate * numberOfDays)
        if(selectedDiscount.value == "senior"){
            discount = rate * .1
        }else if(selectedDiscount.value == "military"){
            discount = rate * .2
        }
            const afterDiscount = rate - discount 
            const tax = 0.12
            const taxAmount = afterDiscount * tax
            const grandTotal = afterDiscount + taxAmount
            
            output.innerText = `
            nights: ${numberOfDays}
            room: ${selectedRoom.value}
            discount: ${discount}
            After Discount: ${afterDiscount}
            Tax: ${taxAmount}
            Total: ${grandTotal}

            `;
    });

});


//Room Type Max Occupancy

