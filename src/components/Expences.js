import React from 'react'

const Expences = () => {
    return (
        <div id="expences">
            <div>
                <p>Expenses</p>
            </div>

            <div class="tabs">
                <button class="button active">MONTHLY</button>
                <button class="button">YEARLY</button>

                <form class="checklist">
                    <p>
                        <label>Chose Month:</label>
                        <select id="myList">
                            <option value="0">January</option>
                            <option value="1">February</option>
                            <option value="2">March</option>
                            <option value="3">April</option>
                            <option value="4">May</option>
                            <option value="5">June</option>
                            <option value="6">July</option>
                            <option value="7">August</option>
                            <option value="8">September</option>
                            <option value="9">October</option>
                            <option value="10">November</option>
                            <option value="11">December</option>
                        </select>
                    </p>
                </form>

            </div>
        </div>
    )
}

export default Expences