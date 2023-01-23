import React, {FC, useEffect, useState} from 'react';
import {IPostCard} from "../../components/common/PostList/PostCard/PostCard";
import PostList from "../../components/common/PostList/PostList";
import {getPosts} from "../../store/AsynsStore/posts";
import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import {useDispatch, useSelector} from "react-redux";
import {getPostsAction} from "../../store/reducers/postReducer";
import {setCardsAction} from "../../store/reducers/selectedCardReducer";
import {IRootState} from "../../store";

const Main: FC = () => {

    const dispatch = useDispatch()
    const [posts, setPosts] = useState<IPostCard[]>([]);
    const [pageCount, setPageCount] = useState(2)

    const handlePostAdd = () => {
        setPageCount(pageCount + 1)
        getPosts(setPosts, pageCount)
        setPosts([...posts, ...posts])
    }

    const { cards } = useSelector((state: IRootState) => state.selectedCard);

    const setReduxPosts = (payload: IPostCard[]) => {
        dispatch(getPostsAction(payload));
        dispatch(setCardsAction(payload));
    }

    useEffect(()=>{
        getPosts((posts: IPostCard[] ) => setReduxPosts(posts))
    }, [])

    useEffect(() => {
        setPosts(cards);
    }, [cards])

    return (
        <PageWrapper>
            <PostList postCards={posts} onClick={handlePostAdd}/>
        </PageWrapper>
    );
};

export default Main;
