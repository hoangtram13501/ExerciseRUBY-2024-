document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");

    if (loginButton) {
        loginButton.addEventListener("click", async() => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (!email || !password) {
                alert("Please fill in both email and password.");
                return;
            }

            // API endpoint
            const apiEndpoint = "/api/v1/sessions/login";

            try {
                const response = await fetch(apiEndpoint, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user: {
                            email: email,
                            password: password,
                        },
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    alert("Login successful!");
                    console.log("User data:", data);

                    if (data.token) {
                        localStorage.setItem("authToken", data.token);
                    }

                    window.location.href = "/users";
                } else {
                    const errorData = await response.json();
                    alert(`Login failed: ${errorData.error || "Unknown error"}`);
                }
            } catch (error) {
                console.error("Error during login:", error);
                alert("An unexpected error occurred. Please try again later.");
            }
        });
    }
});
