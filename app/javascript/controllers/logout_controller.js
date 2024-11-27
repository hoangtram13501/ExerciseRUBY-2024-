import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="logout"
export default class extends Controller {
    connect() {
        console.log('Connected to the logout_controller.');
    }


    async submit(event) {
        event.preventDefault(); // Prevent the default form submission

        const token = localStorage.getItem('authToken');
        try {
            const response = await fetch('/api/v1/users/sign_out', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`,
                    'X-CSRF-Token': document.querySelector('[name=csrf-token]').content
                }
            });

            if (response.ok) {
                Turbo.visit('/users/sign_in');
            } else {
                const errorData = await response.json();
                // Handle login failure (e.g., show error message)
                console.error('Login failed:', errorData);
                alert('Login failed: ' + errorData.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }
}
