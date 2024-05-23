function generateInvitations(guestList, ...details) {
    return guestList.map(guest => {
        let invitation = `<strong>Dear ${guest.personName},</strong><br>You are cordially invited to our party!`;

        if (guest.personAge) {
            invitation += ` We can't wait to celebrate your ${guest.personAge}th birthday with you.`;
        }

        if (guest.rsvpStatus) {
            invitation += ` Please RSVP by ${guest.rsvpStatus}.`;
        }

        if (details.length > 0) {
            invitation += `<br><em>Additional Details:</em> ${details.join(', ')}`;
        }

        return `<li>${invitation}</li>`;
    });
}

const guestList = [
    { personName: "Alice", personAge: 30, rsvpStatus: "April 25th" },
    { personName: "Bob", personAge: 25, rsvpStatus: "April 20th" },
    { personName: "Charlie", personAge: 35, rsvpStatus: "April 22nd" }
];

const invitations = generateInvitations(guestList, "Formal Attire Required", "BYOB");

document.getElementById('invitations').innerHTML = invitations.join('');
