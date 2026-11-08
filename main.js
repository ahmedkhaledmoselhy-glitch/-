

//* == 😂😂😂 قولت أعمل حركة كده تخلي الأرقام تعد من الصفر لحد الرقم الأصلي أول ما الموقع يفتح، مش عارف الحركة دي اتعملت إزاي والله ما فاهم حاجة 😂😂😂 كلود شال الليلة ومعترف أهو عشان ماخدش صفر == *//


//================================================================================================================================================================================================================//
//================================================================================================================================================================================================================// 




// ----- START SUMMARY CARDS COUNTER ANIMATION -----//


const counters = document.querySelectorAll(".dashboard-summary-card-amount");

counters.forEach(counter => {

    const target = Number(counter.textContent.replace(/[^0-9]/g, ""));

    let current = 0;

    const increment = target / 100;

    const updateCounter = () => {

        if (current < target) {

            current += increment;

            counter.textContent = Math.ceil(current).toLocaleString("en-US") + " جنية";

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target.toLocaleString("en-US") + " جنية";

        }

    };

    updateCounter();

});


// ----- END SUMMARY CARDS COUNTER ANIMATION -----//