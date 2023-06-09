import {SuperButton} from "../../SuperButton/SuperButton"
import s from "./BlockSettings.module.css"
import {PanelSettings} from "./PanelSettings/PanelSettings"
import React from "react";

type BlockSettingsPropsType = {
    startValue: number
    changeStartValue: (n: number) => void
    maxValue: number
    changeMaxValue: (number: number) => void
    setStartValueOnDisplay: () => void
    disableSetButton: boolean
}

export const BlockSettings: React.FC<BlockSettingsPropsType> = ({
                                                                    startValue,
                                                                    changeStartValue,
                                                                    maxValue,
                                                                    changeMaxValue,
                                                                    setStartValueOnDisplay,
                                                                    disableSetButton
                                                                }) => {

    return (
        <div className={s.blockSettings}>
            <PanelSettings startValue={startValue} changeStartValue={changeStartValue} maxValue={maxValue}
                           changeMaxValue={changeMaxValue}/>
            <div className={s.panelButtons}>
                <SuperButton title={"set"} callBack={setStartValueOnDisplay} disable={disableSetButton}/>
            </div>
        </div>
    )
}