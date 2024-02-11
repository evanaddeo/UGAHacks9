import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavBar from '@/components/NavBar';
import FeatureWidget from '@/components/FeatureWidget';
import styles from '../app/about.css';

function About() {
    return (
        <div>
            <NavBar />
        <div className="container" style={{ paddingTop: '80px' }}>
            <h1>About PerfectPlate Recipe Promoter</h1>
            <p>PerfectPlate is an innovative platform designed to help users discover and create delicious and healthy meals. Our goal is to inspire and empower individuals to enjoy the process of cooking and eating well-balanced meals.</p>
            <h2>Features</h2>
            <div className={styles.featureContainer}>
            <FeatureWidget
                title="Recipe Discovery"
                description="Browse through a vast collection of recipes tailored to your preferences and dietary restrictions."
            />
            <FeatureWidget
                title="Customization"
                description="Customize recipes based on your calorie goals, dietary restrictions, and budget."
            />
            <FeatureWidget
                title="Meal Planning"
                description="Plan your meals for the week with ease using our meal planning tools."
            />
            <FeatureWidget
                title="Ingredient Lists"
                description="Access detailed ingredient lists and instructions for each recipe."
            />
            <FeatureWidget
                title="Shopping Lists"
                description="Generate shopping lists based on the recipes you select, making grocery shopping a breeze."
            />
            <FeatureWidget
                title="Community Interaction"
                description="Engage with a vibrant community of food enthusiasts, share your favorite recipes, and discover new culinary creations."
            />
            <FeatureWidget
                title="No Pressure to Buy"
                description="Enjoy exploring recipes without any pressure to purchase ingredients or products."
            />
            </div>
            <p>Whether you're a seasoned chef or a novice cook, PerfectPlate has something for everyone. Join us in our mission to promote healthy eating and culinary creativity!</p>
            </div>
        </div>
    );
}

export default About;
