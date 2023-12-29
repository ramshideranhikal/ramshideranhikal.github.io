var animation = bodymovin.loadAnimation({
    container: document.getElementById('love'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/love.json' // lottie file path
  })

  var animation = bodymovin.loadAnimation({
    container: document.getElementById('flag'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/flag-2.json' // lottie file path
  })

  window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})