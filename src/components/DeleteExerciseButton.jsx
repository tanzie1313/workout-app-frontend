import { deleteExercise } from '../services/exerciseService';

const DeleteExerciseButton = ({ exerciseId, onDelete }) => {
    const handleDelete = () => {
        deleteExercise(exerciseId)
            .then(() => onDelete())
            .catch(error => console.error('Error deleting exercise:', error));
    }
    return (
        <button onClick={() => handleDelete()}>Delete</button>
    );

}
export default DeleteExerciseButton;