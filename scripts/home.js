
const GITHUB_USER = 'https://api.github.com/users/eidoriantan'

$(document).ready(function () {
  const date = new Date()
  const template = $('#repo-template').prop('content')

  $('#current-year').text(date.getFullYear())

  $.ajax(GITHUB_USER + '/repos', {
    method: 'GET',
    accepts: 'application/vnd.github.v3+json',
    dataType: 'json',
    success: function (repos) {
      $.each(repos, function () {
        if (this.name === 'eidoriantan.github.io') return true

        const item = $(template).clone()
        $(item).find('[data-temp="name"]').text(this.name)
        $(item).find('[data-temp="desc"]').text(this.description)
        $(item).find('[data-temp="link"]').attr('href', this.homepage)
        $(item).find('[data-temp]').removeAttr('data-temp')

        $('#repos').append(item)
      })
    }
  })
})
