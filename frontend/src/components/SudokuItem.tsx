import React from 'react';

type SudokuArray = number[][];

const SudokuItem: React.FC<{ array: SudokuArray }> = ({ array }) => {
    return (
        <table className='table'>
            <tbody className=' border-1'>
                {array.map((row, rowIndex) => (
                    <tr className=' border-1' key={rowIndex}>
                        {row.map((item, columnIndex) => (
                            <td key={columnIndex}>
                                <h4>{item}</h4>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SudokuItem;
