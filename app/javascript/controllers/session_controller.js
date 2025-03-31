import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
    static targets = ["email", "password"]

    connect() {
        console.log('connect to login controller js');
    }

    async submit(event) {
        event.preventDefault(); // Prevent the default form submission

        const email = this.emailTarget.value;
        const password = this.passwordTarget.value;

        if (email && password) {
            try {
                const response = await fetch('/api/v1/users/sign_in', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': document.querySelector('[name=csrf-token]').content
                    },
                    body: JSON.stringify({ session: { email, password } })
                });

                if (response.ok) {
                    const data = await response.json();
                    const token = response.headers.get('authorization');
                    localStorage.setItem('authToken', token);
                    Turbo.visit('/staff/users');
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
        } else {
            alert('Please fill in both fields.');
        }
    }
}
