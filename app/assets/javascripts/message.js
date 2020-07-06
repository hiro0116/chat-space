$(function(){
  function buildHTML(message){
    if (message.image){
      let html =` <div class="chat-message">
                    <div class="chat-message__name">
                      ${message.user_name}
                    </div>
                    <div class="chat-message__day">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="chat-message__text">
                    <p class="Message__content">
                      ${message.content}
                    </p>
                    <img class="text__image" src="${message.image}">
                  </div>`
      return html;
    } else {
      let html = `<div class="chat-message">
                    <div class="chat-message__name">
                      ${message.user_name}
                    </div>
                    <div class="chat-message__day">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="chat-message__text">
                    <p class="Message__content">
                      ${message.content}
                    </p>
                  </div>`
      return html;
    };
  }

  $('.form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this)
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      let html = buildHTML(message)
      $('.chat-log').append(html)
      $('.chat-log').animate({ scrollTop: $('.chat-log')[0].scrollHeight});
      $('form')[0].reset();
      $('.send-btn').attr('disabled', false);
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    });
  })
});