let $btn = $('#btnSubmit')
let $field = $('#textField')
let $list = $('<ul></ul>').appendTo($('body'))

$btn.click(function (e) {
    /*
    let $h2 = $('<h2>' + $field.val() + '<h2>')
    $h2.hover(function () {
        $h2.css({
            'background-color': 'red',
            'border-radius': '5px'
        })
    })
    $div.append($h2)
    */

    let $listItem = $('<li>' + $field.val() + '</li>')
    $listItem.click(function () {
        let r = () => Math.floor(Math.random() * 255)
        $listItem.css(
            'color',
            'rgb(' + r() + ',' + r() + ',' + r() + ')'
        )
    })
    $listItem.on('dblclick', function () {
        $listItem.remove()
    })

    $list.prepend($listItem)
    $field.val('')
    $field.focus()
    e.preventDefault()
})
$field.on('input', function (e) {
    $btn.prop('disabled', !$field.val())
})

/*
let $div = $('<div></div>')
$div.appendTo($('body'))
*/