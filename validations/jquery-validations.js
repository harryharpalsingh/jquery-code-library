/*Script created by Harpal Singh -- instagram : @streetpro9 */
let GlobalValidation = {
    calculateDaysBetweenDates: function (date1, date2) {
        /* Note : here expected format for date1 & date2 is : yyyy-MM-dd 
           if you're passing date in format : dd-MM-yyyy then use Global.convertToYYYYMMDD()
        */

        // Convert the input strings to Date objects
        const startDate = new Date(date1);
        const endDate = new Date(date2);

        // Calculate the difference in milliseconds
        const timeDifference = endDate - startDate;

        // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
        const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

        return daysDifference + 1;
    },

    calculateDaysBetweenDatesExcludingSundays: function (date1, date2) {
        // Convert the input strings to Date objects
        const startDate = new Date(date1);
        const endDate = new Date(date2);

        // Calculate the difference in milliseconds
        const timeDifference = endDate - startDate;

        // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
        const totalDays = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

        let excludedSundays = 0;

        // Iterate through each day and check if it's a Sunday
        for (let i = 0; i <= totalDays; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);

            // Sunday is represented by 0 in JavaScript Date object
            if (currentDate.getDay() === 0) {
                excludedSundays++;
            }
        }

        // Calculate the final result excluding Sundays
        const daysDifferenceExcludingSundays = totalDays - excludedSundays;

        return daysDifferenceExcludingSundays;

        // Example usage:
        //const startDateString = "2024-02-01";
        //const endDateString = "2024-02-29";

        //const daysBetween = calculateDaysBetweenDatesExcludingSundays(startDateString, endDateString);

        //console.log(`Number of days between ${startDateString} and ${endDateString} excluding Sundays: ${daysBetween} days`);
    },

    convertToYYYYMMDD: function (dateString) {
        //dateString : dd-MM-yyyy
        const [day, month, year] = dateString.split('-');
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },

    isInputEmpty: function (obj, message_) {
        let inputValue = $(obj).val(); //here obj is textbox 
        $(obj).siblings().not('input').remove();
        if (inputValue.trim() === '' || parseFloat(inputValue) === 0) {
            // Display error message
            $(obj).addClass('error');
            $(obj).after(`<br/><span style='padding-top:3px; display:flex; font-size:10pt; color:#D00;'>${message_}</span>`);
            return false;
        }
        else {
            // Clear the error message
            $(obj).removeClass('error');
            return true;
        }
    },

    isValidEmailFormat: function (obj) {
        let email = $(obj).val();
        $(obj).siblings().not('input').remove();
        // Regular expression for validating an Email
        let emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;///^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            $(obj).removeClass('error');
            return true;
        }
        else {
            $(obj).addClass('error');
            $(obj).after(`<br/><span style='padding-top:3px; display:flex; font-size:10pt; color:#D00;'>Email address is invalid</span>`);
            return false;
        }
    },

    isValidDropdown: function (obj, message_) {
        let inputValue = $(obj).val();
        $(obj).siblings().not('input').remove();
        if (inputValue.trim() == 0) {
            // Display error message
            $(obj).addClass('error');
            $(obj).after(`<span style='padding-top:5px; display:flex; font-size:10pt; color:#D00;'>${message_}</span>`);
            return false;
        }
        else {
            // Clear the error message
            $(obj).removeClass('error');
            return true;
        }
    },

    isValidCodePostalFormat: function (obj) {
        let postalCode = $(obj).val();
        $(obj).siblings().not('input').remove();
        // Regular expression for validating an Postal Code
        let postalCodePattern = /^\d{5}$/;

        if (postalCodePattern.test(postalCode)) {
            $(obj).removeClass('error');
            return true;
        }
        else {
            $(obj).addClass('error');
            $(obj).after(`<br/><span style='padding-top:3px; display:flex; font-size:10pt; color:#D00;'>Veuillez saisir une code postal valide, e.g. 95190</span>`);
            return false;
        }
    },

};

/*Example usage of validations*/

function ValidateForm() {
    let isValid = true;

    // Validate input fields
    if (!Global.isInputEmpty($("#textBoxID"), `Your custom error message here`)) {
        isValid = false;
    }

    // Validate dropdowns
    if (!Global.isValidDropdown($("#ddlSelect"), 'Your custom error message here')) {
        isValid = false;
    }

    // Validate email 
    if (!Global.isValidEmailFormat($("#txtEmail"))) {
        isValid = false;
    }

    // Check if all validations passed before further processing
    if (isValid) {
        //execute your code
    }
    else {
        // Validation failed
    }
}