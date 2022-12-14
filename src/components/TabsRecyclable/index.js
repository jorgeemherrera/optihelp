import React, { useState } from "react";
import './TabsRecyclable.scss'

const TabsRecyclable = ({
    children,
    titleTab,
    paragraphTab,
    state
}) => {

    const [clickTab, setClickTab] = useState(false);

    const toogleTab = () => {
        setClickTab(!clickTab)
    }


    return (
       <div className="parent-tab">
            <div className={!clickTab ? 'button-tab' : 'inactive'}>
                <button onClick={toogleTab}><h3>{titleTab}</h3></button>
            </div>
            <section className={clickTab ? 'section-active-tab' : 'inactive'}>
                <button onClick={toogleTab}><h3>{titleTab}</h3></button>
                {paragraphTab &&
                    <p>{paragraphTab}</p>
                }
                {children ?
                    children
                    :
                    null
                }
            </section>
        </div> 
    );

}

export {
    TabsRecyclable
}