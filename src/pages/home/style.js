import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    /* overflow: hidden; */
`;


export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    margin-right: 20px;
    padding-top: 30px;
    width: 625px;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 270px;
`

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 20px;
    background-color: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        display: block;
        float: left;
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
`




export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic {
        dis:display: block;
        width: 125px;
        height: 120px;
        float: right;
        border-radius: 10px;
    }
`


export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`


export const RecommendWrapper = styled.div`
    width: 280px;
    margin: 30px 0;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`


export const WriterWrapper = styled.div`
    border: 1px solid #dcdcdc;
    width: 278px;
    height: 300px;
    line-height: 300px;
    text-align: center;
    border-radius:3px;
`


export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #a5a5a5;
    color: #fff;
    text-align: center;
    border-radius: 20px;
    margin: 30px 0;
    cursor: pointer;
`


export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
`