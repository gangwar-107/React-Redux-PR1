const initState = {
   posts: [
       {id: '1', title: 'Learning React', body:'My aim is just to finish react as soon as'},
       {id: '2', title: 'Learning Node', body:'My aim is just to finish Node as soon as'},
       {id: '3', title: 'Learning Python', body:'My aim is just to finish Python as soon as'}
   ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
          return action.id != post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer 