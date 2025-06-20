const apiURL = "https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json";
const itemsPerPage = 10;
let currentPage = 1;
let data = [];

const tableBody = document.getElementById("table-body");
const buttonsDiv = document.getElementById("buttons");

function createElement(tag, className = "", textContent = "") {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

function renderTable(pageData) {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
    pageData.forEach(item => {
        const tr = document.createElement("tr");

        tr.appendChild(createElement("td", "table-light", item.id));
        tr.appendChild(createElement("td", "table-light", item.name));
        tr.appendChild(createElement("td", "table-light", item.email));

        tableBody.appendChild(tr);
    });
}
function renderPaginationButtons(totalPages) {
    buttonsDiv.innerHTML = "";
    const createBtn = (text, disabled, onClick) => {
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.className = "btn btn-primary btn-sm";
        btn.disabled = disabled;
        btn.addEventListener("click", onClick);
        return btn;
    };

    buttonsDiv.appendChild(createBtn("First", currentPage === 1, () => changePage(1)));
    buttonsDiv.appendChild(createBtn("Previous", currentPage === 1, () => changePage(currentPage - 1)));
    for (let i = 1; i <= totalPages; i++) {
        const btn = createBtn(i, i === currentPage, () => changePage(i));
        btn.className = i === currentPage ? "btn btn-secondary btn-sm" : "btn btn-outline-primary btn-sm";
        buttonsDiv.appendChild(btn);
    }

    buttonsDiv.appendChild(createBtn("Next", currentPage === totalPages, () => changePage(currentPage + 1)));
    buttonsDiv.appendChild(createBtn("Last", currentPage === totalPages, () => changePage(totalPages)));
}

function changePage(page) {
    currentPage = page;
    render();
}

function render() {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = data.slice(start, end);

    renderTable(pageData);
    renderPaginationButtons(totalPages);
}

async function init() {
    try {
        const res = await fetch(apiURL);
        data = await res.json();
        render();
    } catch {
        tableBody.innerHTML = `<tr><td colspan="3" class="text-danger text-center">Failed to load data.</td></tr>`;
    }
}

init();
