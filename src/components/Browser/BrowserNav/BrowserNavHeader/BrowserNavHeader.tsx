import React, { useState, useEffect, useCallback } from 'react'
import useBrowserState from '../../../../hooks/useBrowserState';
import './BrowserNavHeader.css';

type tab = {
    title: string;
    url: string;
}

const BrowserNavHeader = () => {

    const [click, setClick] = useState('0');

    const [tabs, setTabs] = useState<Array<tab>>([
        {
            title: '새 탭',
            url: ''
        }
    ]);

    const { closeBrowser,minBrowser,maxBrowser,fullscreen } = useBrowserState();

    const onClickSelectTab = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { dataset, className } = e.target as HTMLElement;
        const index = dataset.index as string;
        if (className !== 'tab') return;
        setClick(index);
    }

    const onClickAddNewTab = useCallback(
        async () => {
            const newTab: tab = await {
                title: '새 탭',
                url: ''
            }
            await setTabs([
                ...tabs,
                newTab
            ])
        }
        ,[tabs])

    const onClickCloseTab = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { dataset } = (e.target as HTMLElement)
        await setTabs(
            tabs.filter((obj, index) => {
                return index !== Number(dataset.index)
            })
        )
    }

    useEffect(() => {
        if (tabs.length === 0) {
            closeBrowser();
            onClickAddNewTab();
        }
    }, [tabs,closeBrowser,onClickAddNewTab])

    const printTabs = tabs.map((obj, index) => {
        return (
            <div key={index} data-index={`${index}`} className={`tab` + (click === `${index}` ? " clicked" : "")} onClick={onClickSelectTab}>
                <div data-index={`${index}`} className="tab-content">{obj.title}</div>
                <div data-index={`${index}`} className="tab-close-icon" onClick={onClickCloseTab}>×</div>
            </div>
        )
    })

    return (
        <header className="browser-nav-header">
            <div className="tab-buttons">
                <div className="close" onClick={closeBrowser}>
                    <div className="icon">×</div>
                </div>
                <div className="down">
                    <div className="icon">-</div>
                </div>
                <div className="minMax" onClick={fullscreen ? minBrowser : maxBrowser}>
                    <div className="icon">↔</div>
                </div>
            </div>
            <div className="tab-list">
                {printTabs}
            </div>
            <div className="add-tab" onClick={onClickAddNewTab}>+</div>
        </header>
    )
}

export default BrowserNavHeader;
