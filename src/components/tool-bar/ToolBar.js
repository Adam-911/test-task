import React from "react";
import { Pagination } from 'antd';
import './ToolBar.scss';

export default function ToolBar() {
    return (
        <div className='tool-bar'>
            <div className="empty"></div>
            <div className="tool-bar__pagination">
                <Pagination
                    defaultCurrent={2}
                    total={240}
                    showSizeChanger={false}
                />
            </div>
            <span className="tool-bar__dropdown">
                <span>Показывать по</span>
                <select className="tool-bar__dropdown__select" name="select">
                <option value="value1">15</option>
                <option value="value2" selected>20</option>
                <option value="value3">50</option>
                </select>
            </span>
        </div>
    )
}