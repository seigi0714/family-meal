
export default function ({ app, route, redirect }) {
    if (!$firebase.currentUser && route.path == ('/users/add')){
        alert('ログインが必要です')
        redirect('/')
    }
    if ($firebase.currentUser && route.path == ('/signup')){
        redirect('/users/add')
    }
}