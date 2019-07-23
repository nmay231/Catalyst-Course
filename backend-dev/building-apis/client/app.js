const API_URL = 'http://localhost:3000/api/chirps'

$('#addChirp').click((e) => {
    let chirp = {
        user: $('#userField').val(),
        message: $('#messageField').val(),
        upVotes: 0,
    }
    $.post({
        url: API_URL,
        data: JSON.stringify({
            ...chirp,
            upVotes: 0
        }),
        contentType: "application/json",
        dataType: 'json'
    })
    $('#messageField').val('')
    $('#messageField').focus()
    updateTimeline()
})

$('#chirpModal').on('show.bs.modal', async function (e) {
    let editLink = $(e.relatedTarget)
    let id = editLink.data('id')

    let chirp = await $.getJSON(API_URL + '/' + id).promise()
    let modal = $(this)
    modal.find('.modal-title').text(`Edit ${chirp.user}'s Post (why would you do that?)`)

    // I'm using find on ids because I'm paranoid    
    modal.find('#user').val(chirp.user)
    modal.find('#message').val(chirp.message)
    modal.find('#saveChanges').click(() => {
        $.ajax({
            url: API_URL + '/' + id,
            method: 'PUT',
            data: JSON.stringify({
                ...chirp,
                user: modal.find('#user').val(),
                message: modal.find('#message').val(),
            }),
            contentType: "application/json",
            dataType: 'json',
        })
        modal.modal('hide')
        modal.on('hidden.bs.modal', () => {
            updateTimeline()
            modal.find('#saveChanges').off('click')
            modal.off('hidden.bs.modal')
        })
    })
})

$('#chirpModal').on('shown.bs.modal', () => {
    $('#chirpModal').find('#user').focus()
})

async function updateTimeline() {
    let $timeline = $('#chirpsTimeline')
    $timeline.empty()
    let chirps = await $.getJSON(API_URL).promise()
    for (let id of Object.keys(chirps).reverse()) {
        if (id === 'nextid') {
            continue
        }
        $timeline.append($(`
        <div class="col-xl-4 col-md-6" id="${id}">
            <article class="card my-2 mx-n1 shadow-sm">
                <div class="card-header d-flex flex-row">
                    <h4 class="card-title align-self-end">${chirps[id].user}</h4>
                    <a class="text-decoration-none text-primary align-self-start ml-4"
                        data-toggle="modal" data-target="#chirpModal" data-id="${id}"
                        style="cursor: pointer">edit</a>
                    <button type="button" class="close ml-auto p-1" id="delete-${id}">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="card-body d-flex">
                    <div class="card-text mr-2">${chirps[id].message}</div>
                    <div class="row ml-auto mr-n1 mt-auto text-nowrap
                        btn btn-outline-info" id="upvote-${id}">
                        Up Vote <span id="votes-${id}">${chirps[id].upVotes}</span>
                    </div>
                </div>
            </article>
        </div>
        `))
        $('#delete-' + id).click(() => {
            $.ajax(API_URL + '/' + id, {
                method: 'DELETE'
            })
            $('#' + id).remove()
        })
        $('#upvote-' + id).click(() => {
            let votes = parseInt($('#votes-' + id).text()) + 1
            $.ajax({
                url: API_URL + '/' + id,
                method: 'PUT',
                data: JSON.stringify({
                    ...chirps[id],
                    upVotes: votes
                }),
                contentType: "application/json",
                dataType: 'json'
            })
            $('#votes-' + id).text(votes)
        })
    }
}

updateTimeline()