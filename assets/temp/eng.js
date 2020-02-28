function eng(data){
    return `
<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${data.name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${data.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}" target="_blank" rel="noopener noreferrer">${data.github}</a></li>
        </ul>
    </div>
</div>
`
}

module.exports = eng;