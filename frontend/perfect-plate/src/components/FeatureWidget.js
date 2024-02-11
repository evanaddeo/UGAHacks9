// FeatureWidget.js

import React from 'react';
import styles from '../app/featurewidget.modules.css';

// FeatureWidget.js

function FeatureWidget({ title, description }) {
    return (
        <div className={styles.featureWidget}>
            <div className={styles.title}>
                <h3>{title}</h3>
            </div>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default FeatureWidget;