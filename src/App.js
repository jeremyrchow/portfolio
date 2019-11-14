import React from 'react';
import './App.css';
import HeaderBanner from './components/HeaderBanner'
import ProjectContainer from './components/ProjectContainer'
import ProfilePic from './assets/Jeremy_Chow_White_Background.jpg'
import ContactForm from './components/ContactForm'
import SocialMediaLinks from './components/SocialMediaLinks'
import SkillsGridList from './components/SkillsGridList'
function App() {

    return (
        <div className="App">
        <HeaderBanner />
        <div className = "profile-pic">
            <img
            style={{borderRadius: "50%", paddingTop: "60px",height: "calc(10vw+5vw)", maxHeight: "500px"}} 
            src = {ProfilePic}
            alt = "JeremyChowPicture"
            />
        </div>

        <div className = "intro-text">
            <h2> {"Hi, my name is "} </h2>
            <h1> {"Jeremy Chow"} </h1>
            <SocialMediaLinks />
            <p> I'm a Data Scientist passionate about using machine learning models to impact business
             decisions and gather meaningful insights.</p>
            <p style={{paddingTop: '2em'}}> I have worked with the following technologies: </p>
            
            <SkillsGridList />
        </div>


        <div className = "project-wrapper">
            <hr /> 
            <h1 style={{fontSize: "calc(2em + 2vw)", textAlign: "left"}}> Data Science Projects </h1>

            <ProjectContainer 
                title="Game Recommender for Twitch Streamers"
                description = {"Suggested games for content creators to stream with the goal of increasing \
                viewership based on previous \
                streaming activity and time series analysis on streamer/viewer balance data on Twitch. \
                Built complete data pipeline that automated Twitch API calls on an Amazon EC2 instance \
                using cron jobs, then \
                stored data in SQL database on an Amazon RDS instance."}

                github="https://github.com/jeremyrchow/Twitch_Streamers_Recommender"
                medium="https://towardsdatascience.com/building-a-growth-focused-game-recommender-for-twitch-streamers-7389e3868f2e"
            /> 

            <ProjectContainer 
                title="Chatroom Toxicity Classifier Chatbot"

                description = {"Built a chatbot that predicted the probability that an online comment \
                is toxic. Deployed model \
                on website and through Twitch chatbot programmed in JavaScript to classify live chat \
                in real time. Model used \
                TF-IDF vectorization and logistic regression to process and classify comments on a 0-1 scale for six \
                different categories that were present in the labeled training set. Models and pipeline built using \
                Scikit-learn library. Basic API for chatbot to interface with website built using Flask. \
                Website is deployed \
                on Heroku and is available to try below."}

                github="https://github.com/jeremyrchow/harassment-classifier"

                medium = "https://towardsdatascience.com/quantifying-chatroom-toxicity-e755dd2f9ccf"

                link = "https://chat-toxicity-classifier.herokuapp.com/"
            />

            <ProjectContainer 
                title="Generating text in the style of Edgar Allen Poe"

                description = 
                {["Generated text in the style of Edgar Allen Poe, specifically emulating his writing style \
                in ", <a key="p3_link" href = "https://www.kaggle.com/c/spooky-author-identification">
                select short horror stories.</a>, " Uses an embedding layer followed by 2 stacked LSTM layers. \
                Model built on Tensorflow framework with Keras library. Training data was 7900 sentences \
                which were tokenized using Keras Tokenizer then fed into the model using a sliding window of \
                20 tokens. The model would then use the first 19 tokens of the sequence to predict the 20th. \
                This resulted in 200,000 training sequences that were then fed into the embedding layer of size 50, \
                two 100 node LSTM layers, then a Dense layer with RELU activation, followed by a Dense layer with \
                Softmax activation and output shape of vocabulary size in order to output probabilities of 0-1 \
                for all words in the vocabulary. \
                "]}

                github="https://github.com/jeremyrchow/text-generation-kaggle"
            />
            
            <ProjectContainer 
                title="Classifying Defaulting Loans Issued by LendingClub"
                
                description = 
                {["Predicted whether a Lending Club loan would default using random forest and gradient boosting \
                classifiers. Input data consisted of 235,000 rows and 145 columns with loan data (amount, monthly \
                payment, time issued), \
                account information, settlement information, hardship details, investor funding information directly \
                sourced from LendingClub website. There is a class imbalance of about 80% paid off loans and 20% \
                defaulted loans. Achieved an ROC-AUC score of 0.726"]}

                github="https://github.com/jeremyrchow/lending_club_default_model"
            />

        </div>

    <ContactForm />

    <footer> Built by Jeremy Chow </footer>

    </div>
    );
}

export default App;

