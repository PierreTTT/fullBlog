import { IPost } from '../../types/posts';
import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

type FeaturedProps = {
    posts:IPost[];
}

function FeaturedPost(props:FeaturedProps){
    return(
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={props.posts}/>
        </section>
    )
}

export default FeaturedPost;