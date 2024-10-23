import React from 'react'
import CustomButton from '../components/CustomBotton'

function News () {
    const newsArticle = {
        title : 'A theft',
        author : 'Samantha',
        date : '23rd October, 24',
        time : '4 pm',
        description : 'dummy desc'
    }
    const name = 'Unnati Joshi'

    return (
        <div>
            <h1>This is the News Page</h1>
            <CustomButton cr='white' bgColor='purple' name='News Button'/>
            <CustomButton cr='white' bgColor='brown' name='Another Button'/>
            <p>{newsArticle.title}</p>
            <p>{newsArticle.time}</p>
        </div>
    )
}
export default News