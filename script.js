const board = document.getElementById('chessboard');

// Initial setup of pieces on the board
const initialBoardSetup = () => {
    const pieces = [
        '♖', '♘', '♗', '♔', '♕', '♗', '♘', '♖', // White pieces
        ...Array(8).fill('♙'), // White pawns
        ...Array(8).fill(''), // Empty squares
        ...Array(8).fill('♟'), // Black pawns
        '♜', '♞', '♝', '♚', '♛', '♝', '♞', '♜'  // Black pieces
    ];

    pieces.forEach((piece, index) => {
        const square = document.createElement('div');
        square.className = 'square ' + ((Math.floor(index / 8) + index) % 2 === 0 ? 'white' : 'black');
        square.setAttribute('data-index', index);
        square.innerHTML = piece;
        square.addEventListener('click', () => selectSquare(square, piece));
        board.appendChild(square);
    });
};

let selectedSquare = null;

const selectSquare = (square, piece) => {
    if (selectedSquare) {
        // Logic to move the piece if the move is valid
        const pieceToMove = selectedSquare.innerHTML;
        selectedSquare.innerHTML = '';
        square.innerHTML = pieceToMove;
        selectedSquare.classList.remove('selected');
        selectedSquare = null;
    } else {
        selectedSquare = square;
        selectedSquare.classList.add('selected');
    }
};

initialBoardSetup();
