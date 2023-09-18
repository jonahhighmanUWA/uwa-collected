// Change these variables to change the message of the popup
var modal_title1 = "Cultural advice";
var modal_title2 = "";
var modal_message = "Aboriginal and Torres Strait Islander people are advised that UWA Collected contains images, voices and names of people who have died.</p><p>Some material may contain words, descriptions and images that are considered offensive and discriminatory by current standards, or reflect outdated ideas, practice and analysis. These do not reflect the views of the University of Western Australia, but are provided in a historical context and reflect the period in which they were written or created.";
var modal_button1_text = "Learn more";
var modal_button2_text = "Don't show again";
var modal_button1_link = "/pages/test-staticinfo";
var modal_button2_link = "#";

// Set to 'true' if the modal should not show again after a user has seen it once
var modal_only_show_once = true;

// CSS styles to insert
var styles = `
/* The semi-opaque black background behind the popup */
.modal_overlay {
	display: none;
	position: fixed;
	top: 0;
	height: 100vh;
	height: 100%; /* Fallback */
	height: -moz-available;
	height: -webkit-fill-available;
	height: fill-available;
	height: stretch; /* Latest specification */
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.9);
	z-index: 5;
	overflow-x: hidden;
	overflow-y: auto;
}
/* Container to align the accent frame behind the main pop-up window */
.modal_content {
	font-family: "Montserrat", sans-serif;
	display: grid;
	grid-template-columns: 50px 24px auto 120px 50px;
	grid-template-rows: 80px auto auto 24px;
	justify-content: center;
	margin: 0 auto;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
}
/* Accent frame */
.modal_accent {
	background-image: url(https://collected.uwa.edu.au/htmluploads/uwa/image/shared/abstract.png);
	grid-area: 2/2/5/4;
	height: auto;
}
/* Main pop-up window */
.modal_copy {
	grid-area: 1/3/3/5;
	text-align: left;
	padding: 24px 36px 0 36px;
	font-size: 16px;
	font-family: "Montserrat", sans-serif;
	background-color: #fff;
	max-width: 800px;
	position: relative;
	margin-bottom: -1px;
}
.modal_copy:focus-visible {
	outline: none;
}
.modal_copy p {
	margin: 0 0 1rem 0;
	line-height: 28px;
}
.modal_copy h2 {
	color: black;
	font-size: 1.953rem;
	font-weight: 600;
	font-family: "Montserrat", sans-serif;
	margin: 1rem 0px 1.38rem;
}
/* Container to hold the buttons */
.modal_button_container {
	grid-area: 3/3/4/5;
	background-color: white;
	display: flex;
	justify-content: space-between;
	padding: 1.38rem 36px 36px 36px;
	gap: 36px;
}
/* Styling for the buttons */
.modal_button_container button {
	background-color: #fff;
	color: #003087;
	font-size: 14px;
	font-family: inherit;
	border: 1px solid #000;
	padding: 13px 30px;
	/* margin: 0 15px; */
	width: 100%;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
}
.modal_button_container a {
	width: 100%;
}
/* The first button is black with white text */
button.button1 {
	color: #fff;
	background-color: #000;
}
/* Colour and shadow for hovering over the buttons */
.modal_button_container button:hover {
	background-color: #003087;
	color: #fff;
	box-shadow: 0px 4px 10px -2px rgba(0, 0, 0, 0.5);
}
/* 'X' close button in the right corner */
.modal_button_close {
	font-size: 18px;
	position: absolute;
	top: 20px;
	right: 20px;
	height: 30px;
	width: 30px;
	border: 1px solid #fff;
	background-color: #fff;
	transition: all 0.3s ease-in-out;
}
.modal_button_close>i {
	color: #000;
	position: absolute;
	top: 50%;
	left: 52%;
	transform: translate(-50%, -50%);
}
.modal_button_close:hover {
	border-color: #000;
	background-color: #fff;
	box-shadow: 0px 4px 10px -2px rgba(0, 0, 0, 0.5);
}
/* Styling changes for tablets and mobiles */
@media only screen and (max-width: 790px) {
	.modal_copy {
		width: auto;
	}
	.modal_button_container {
		flex-direction: column;
		justify-content: center;
		gap: 24px;
	}
	.modal_button_container a {
		flex: 100%;
	}
}
/* Styling changes for mobiles */
@media only screen and (max-width: 576px) {
	.modal_overlay {
		overflow-y: hidden;		
	}
	.modal_content {
		height: calc(100% - 24px);
		display: flex;
		flex-direction: column;
		border-collapse: collapse;
		margin: 12px;
		position: static;
		top: 0;
		transform: translateY(0);
		background-color: #fff;
		overflow-y: hidden;
	}
	.modal_accent {
		justify-self: flex-start;
		height: 24px;
	}
	.modal_copy {
		justify-self: flex-start;
		padding-bottom: 0;
		flex: 1 1 auto;
		height: 0px;
		overflow-y: auto;
		background:
		/* Shadow Cover TOP */
		linear-gradient(white 30%, rgba(255, 255, 255, 0)) center top,
		/* Shadow Cover BOTTOM */
		linear-gradient(rgba(255, 255, 255, 0), white 70%) center bottom,
		/* Shadow TOP */
		radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) center top,
		/* Shadow BOTTOM */
		radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) center bottom;
		background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
		background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
		background-attachment: local, local, scroll, scroll;
	}
	.modal_copy h2 {
		margin-top: 0.5rem;
	}
	.modal_copy p:last-child {
		margin: 0;
	}
	.modal_button_container {
		justify-self: flex-end;
		margin: 0;
		padding: 36px;
	}
	.modal_button_close {
		position: fixed;
		top: 36px;
		right: 12px;
	}
}
`;

// Insert the popup styles into the page
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

// The popup functionality begins here
$(document).ready(function () {
    // Function to only allow tabbing focus on popup buttons
    function trapFocus(e) {
        const firstFocusableElement = $('.modal_copy').find(':focusable').eq(0); // get first element to be focused inside modal
        const focusableContent = $('.modal_copy').find(':focusable');
        const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal
        let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
        if (!isTabPressed) {
            return;
        }
        if (e.shiftKey) { // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus for the last focusable element
                e.preventDefault();
            }
        } else { // if tab key is pressed
            if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                firstFocusableElement.focus(); // add focus for the first focusable element
                e.preventDefault();
            }
        }
    }

    // Function to open the popup and start the tabbing focus trap
    function openModal() {
        $('.modal_overlay').fadeIn("def", function () {
            $('.modal_copy').attr("tabindex", "-1").focus();
            localStorage.setItem('modal_open', 'true');
            document.addEventListener('keydown', trapFocus);
        });
    }

    // Function to close the popup and stop the tabbing focus trap
    function closeModal() {
        document.removeEventListener("keydown", trapFocus);
        $('.modal_overlay').fadeOut().attr("aria-hidden", "true");
        localStorage.setItem('modal_open', 'false');
        $(document).find(':focusable').eq(0).focus();
    }

    // Execution starts here

	// Injects the HTML of the popup window into the code
	$('body').append(`
		<div class="modal_overlay">
		<div class="modal_content">
		<div class="modal_accent"></div>
		<div id="alertdialog" class="modal_copy" role="alertdialog" aria-modal="true" aria-labelledby="modal_title" aria-describedby="modal_message">
		<h2 id="modal_title"><span class="font-2">${modal_title1}<br></span>${modal_title2}</h2>
		<p id="modal_message">${modal_message}</p>
		<button class="modal_button_close modalClickClose" aria-label="Close dialog"><i class="fa fa-close"></i></button></div>
		<div class="modal_button_container">
		<a href="${modal_button1_link}"><button tabindex="-1" class="button1">${modal_button1_text}</button></a>
		<a href="${modal_button2_link}"><button class="modalClickClose modalDontShowAgain" tabindex="-1">${modal_button2_text}</button></a>
		</div></div></div>
		`)

    // Opens the popup after a brief wait when page loads
    if (!(modal_only_show_once === true && localStorage.getItem('modal_seen') === 'true')) {
        setTimeout(function () {
            openModal();
        }, 0);
    }
    // On press of 'Esc' key, closes the popup
    $(document).on('keydown', function (event) {
        if (event.key == "Escape") {
            closeModal();
        }
    });
    // On click of a close button, closes the popup
    $('.modalClickClose').click(function () {
        closeModal();
    });
    // On click of a 'Don't show again' button, remember on this device not to show next time
    $('.modalDontShowAgain').click(function () {
        localStorage.setItem('modal_seen', 'true');
    });
    // TESTING Open modal with link on UAT page
    $('#testingOpenModal').click(function () {
        openModal();
    });
    // TESTING Clear variable for 'Don't show again'
    $('#testingReset').click(function () {
        localStorage.removeItem('modal_seen');
    });
});