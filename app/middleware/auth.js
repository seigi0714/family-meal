export default function ({ app, route, redirect }) {
    if (!$firebase.currentUser && route.path == '/users/add'){
        redirect('/')
    }
}