import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    start() {
        this.updateButton("In Progress...", true);
        this.updateMessage("Đang xử lý...");

        fetch("/api/v1/users/export", {
                method: "POST",
                headers: { "X-CSRF-Token": document.querySelector("[name='csrf-token']").content }
            })
            .then(response => response.json())
            .then(() => {
                this.checkStatus();
            })
            .catch(error => {
                console.error("Lỗi khi gửi yêu cầu export:", error);
                this.updateButton("Export CSV", false);
                this.updateMessage("Lỗi! Hãy thử lại.");
            });
    }

    checkStatus() {
        const interval = setInterval(() => {
            fetch("/api/v1/users/check_export_status")
                .then(response => response.json())
                .then(data => {
                    if (data.status === "in_progress") {
                        this.updateButton("In Progress...", true, "#f1c40f");
                        this.updateMessage("Đang xử lý...");
                    } else if (data.status === "done") {
                        this.updateButton("Done", false, "#2ecc71");
                        this.updateMessage("Hoàn thành!");
                        this.showDownloadLink(data.file_path);
                        clearInterval(interval);
                    }
                })
                .catch(error => console.error("Lỗi khi kiểm tra trạng thái:", error));
        }, 3000);
    }

    updateButton(text, disabled) {
        let button = document.getElementById("export-button");
        button.innerText = text;
        button.disabled = disabled;
    }

    updateMessage(text) {
        document.getElementById("export-message").innerText = text;
    }

    showDownloadLink(filePath) {
        let downloadLink = document.getElementById("download-link");
        downloadLink.href = filePath;
        downloadLink.style.display = "inline-block";
    }
}
