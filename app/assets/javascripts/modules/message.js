$(function(){

  function buildHTML(message){
    if (message.image){
      let html =`
                  <div class="chat-message" data-message-id=${message.id}>
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
      let html = `
                  <div class="chat-message" data-message-id=${message.id}>
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
    .done(function(messages){
      let html = buildHTML(messages);
      $('.chat-log').append(html);  
      $('form')[0].reset();
        $('.chat-log').animate({ scrollTop: $('.chat-log')[0].scrollHeight});
        $('.send-btn').prop("disabled", false);
      })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
      $('.send-btn').prop("disabled", false);
    });
  });
});