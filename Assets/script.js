$(window).on('load', function() {
    var locationBkg = $(location).attr('search')
    if (locationBkg == '?login') {
        $('.container').css('background-image', 'url("Images/login.png")')
        $('.catalog').hide()
        $('.form').hide()
        $('.carrinho').hide()
        $('#logar').on('click', function(){
            var login, pass, loginData
            login = $('#lg').val()
            pass = $('#ps').val()
            if(login || pass){
                loginData = JSON.parse(localStorage.getItem('login'))
                if(login == loginData.login || pass == loginData.pass){
                    localStorage.setItem('loggedIn', true)
                    window.location.href="?market"
                }else{
                    window.alert('Login or Password is incorrect')
                }
            }else{
                window.alert('Some field is empty')
            }
        })
    }else if (locationBkg == '?home' || locationBkg == '') {
        $('.login').hide()
        $('.form').hide()
        $('.carrinho').hide()
        // controle de slideshow
        var img = document.getElementById('product')
        var products = ['glitchpop.webp', 'whack.jpg', 'zedd.jpg']
        localStorage.setItem('product', JSON.stringify(products))
        var logado = localStorage.getItem('loggedIn')
        var index = 0
        img.src = 'Images/' + products[index]
        if (products[index].indexOf('.webp') == 9) {
            let newName = products[index].replace('.webp', '')
            $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
            $('button').on('click', function(e) {
                localStorage.setItem('selectProd', e.target.value);
                if (logado != 'false' && logado != null) {
                    window.location.href = '?market'
                } else {
                    window.location.href = '?cad'
                }
            })
        }
        $('#left').on('click', function() {
            if (index == 0) {
                index = products.length - 1
                img.src = './Images/' + products[index]
                if (products[index].indexOf('.webp') == 9) {
                    let newName = products[index].replace('.webp', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?p=?market'
                        } else {
                            window.location.href = '?p=?cad'
                        }
                    })
                } else if (products[index].indexOf('.jpg') == 5) {
                    let newName = products[index].replace('.jpg', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?p=?market'
                        } else {
                            window.location.href = '?p=?cad'
                        }
                    })
                } else if (products[index].indexOf('.jpg') == 4) {
                    let newName = products[index].replace('.jpg', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?p=?market'
                        } else {
                            window.location.href = '?p=?cad'
                        }
                    })
                }
            } else if (index <= 2) {
                index = index - 1
                img.src = './Images/' + products[index]
                if (products[index].indexOf('.webp') == 9) {
                    let newName = products[index].replace('.webp', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?market'
                        } else {
                            window.location.href = '?cad'
                        }
                    })
                } else if (products[index].indexOf('.jpg') == 5) {
                    let newName = products[index].replace('.jpg', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?market'
                        } else {
                            window.location.href = '?cad'
                        }
                    })
                } else if (products[index].indexOf('.jpg') == 4) {
                    let newName = products[index].replace('.jpg', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?market'
                        } else {
                            window.location.href = '?cad'
                        }
                    })
                }
            }
        })
        $('#right').on('click', function() {
            if (index == 0) {
                index = index + 1
                img.src = './Images/' + products[index]
                if (products[index].indexOf('.webp') == 9) {
                    let newName = products[index].replace('.webp', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?market'
                        } else {
                            window.location.href = '?cad'
                        }
                    })
                } else if (products[index].indexOf('.jpg') == 5) {
                    let newName = products[index].replace('.jpg', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?market'
                        } else {
                            window.location.href = '?cad'
                        }
                    })
                } else if (products[index].indexOf('.jpg') == 4) {
                    let newName = products[index].replace('.jpg', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?market'
                        } else {
                            window.location.href = '?cad'
                        }
                    })
                }
            } else if (index < 2) {
                index = products.length - 1
                img.src = './Images/' + products[index]
                if (products[index].indexOf('.webp') == 9) {
                    let newName = products[index].replace('.webp', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?market'
                        } else {
                            window.location.href = '?cad'
                        }
                    })
                } else if (products[index].indexOf('.jpg') == 5) {
                    let newName = products[index].replace('.jpg', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?market'
                        } else {
                            window.location.href = '?cad'
                        }
                    })
                } else if (products[index].indexOf('.jpg') == 4) {
                    let newName = products[index].replace('.jpg', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?market'
                        } else {
                            window.location.href = '?cad'
                        }
                    })
                }
            } else if (index == 2) {
                index = 0
                img.src = './Images/' + products[index]
                if (products[index].indexOf('.webp') == 9) {
                    let newName = products[index].replace('.webp', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?market'
                        } else {
                            window.location.href = '?cad'
                        }
                    })
                } else if (products[index].indexOf('.jpg') == 5) {
                    let newName = products[index].replace('.jpg', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?market'
                        } else {
                            window.location.href = '?cad'
                        }
                    })
                } else if (products[index].indexOf('.jpg') == 4) {
                    let newName = products[index].replace('.jpg', '')
                    $('.select').html('<button type="button" value="' + index + '">Comprar: ' + newName.toLocaleUpperCase() + '</button>')
                    $('button').on('click', function(e) {
                        localStorage.setItem('selectProd', e.target.value);
                        if (logado != 'false' && logado != null) {
                            window.location.href = '?market'
                        } else {
                            window.location.href = '?cad'
                        }
                    })
                }
            }
        })
    }else if(locationBkg == '?cad'){
        $('.login').hide()
        $('.catalog').hide()
        $('.carrinho').hide()
        $('.container').css('background-image', 'url("Images/login.png")')
        $('#cad').on('click', function(){
            var email, login, pass, repass;
            email = $('#usr').val()
            login = $('#lgin').val()
            pass = $('#pass').val()
            repass = $('#repass').val()
            jsonUsr = {'login': login, 'pass': pass, 'email': email}
            jsonUsr = JSON.stringify(jsonUsr)
            if (pass == repass) {
                localStorage.setItem('login',  jsonUsr)
                window.location.href="?login"
            }else{
                window.alert('Password and repeat password do not match.')
                $('#pass').val('')
                $('#repass').val('')
            }
        })
    }else if(locationBkg == '?market'){
        $('.login').hide()
        $('.catalog').hide()
        $('.form').hide()
        var user = JSON.parse(localStorage.getItem('login'))
    var img = document.getElementById('img')
    $('#user').append(user.login)
    var prodId = localStorage.getItem('selectProd')
    var prodArray = JSON.parse(localStorage.getItem('product'))
    if(prodArray[prodId] == 'glitchpop.webp'){
        let tempName = prodArray[prodId].replace('.webp', '')
        $('#produto').append(tempName)
    }else if(prodArray[prodId] == "whack.jpg"){
        let tempName = prodArray[prodId].replace('.jpg', '')
        $('#produto').append(tempName)
    }else if(prodArray[prodId] == "zedd.jpg"){
        let tempName = prodArray[prodId].replace('.jpg', '')
        $('#produto').append(tempName)
    }
    img.src = 'Images/' + prodArray[prodId]
    }
    var checkLogin = localStorage.getItem('loggedIn')
    console.log(checkLogin, null)
    if(checkLogin != null && checkLogin != 'false'){
        console.log('Deu ruim')
        $('#nLogin').hide()
        $('#sair').on('click', function(){
            let verify = prompt('Do you really want to leave? [Y/N]', 'N')
            if(verify.toUpperCase() == 'Y'){
                localStorage.removeItem('loggedIn')
                window.location.href = '?home'
            }
        })
    }else if(checkLogin == null){
        console.log('Deu bom')
        $('#nMensage').hide()
        $('#sair').hide()
    }
})