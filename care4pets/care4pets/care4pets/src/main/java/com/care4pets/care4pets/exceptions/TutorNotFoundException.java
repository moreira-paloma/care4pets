public class TutorNotFoundException extends RuntimeException {

    public TutorNotFoundException(Long id) {
        super("Tutor com ID " + id + " não encontrado");
    }

    public TutorNotFoundException(String message) {
        super(message);
    }
}