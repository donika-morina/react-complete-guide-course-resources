import { useImperativeHandle, useRef } from "react";


export default function ResultModal({ ref, remainingTime, targetTime, handleReset }) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    const userLost = remainingTime <= 0;
    const remainder = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {userLost ? "Lost" : "Won"}</h2>
            {!userLost && <h3>You earned {score} point{(score != 1) ? "s" : ""}</h3>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{remainder} seconds left.</strong></p>
            <form method="dialog">
                <button onClick={handleReset}>Close</button>
            </form>
        </dialog>
    );
}