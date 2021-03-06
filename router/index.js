var express = require('express');
var path = require('path');
var router = express.Router();
var passport = require('passport');

// 메인화면
// 로그인 되어 있지 않다면 로그인 창으로 넘어감
router.get('/', function (req, res, next) {
    // 로그인 체크
    if(req.isAuthenticated()){
        res.render('index');
    }else{
        res.render('login');
    }
});

// 회원가입 화면
router.get('/signup', function(req,res){
    res.render('signup');
});


router.post('/signup', passport.authenticate('signup', {
    successRedirect : '/', 
    failureRedirect : '/signup', //가입 실패시 redirect할 url주소
    failureFlash : true 
}));

router.post('/login', passport.authenticate('login', {
    successRedirect : '/', 
    failureRedirect : '/login', //로그인 실패시 redirect할 url주소
    failureFlash : true 
}))

router.get('/logout',function(req,res){
    req.logout();
    res.redirect('/');
});


module.exports = router;