// 퀴즈 데이터 정의
const quizzes = {
    object1: {
        question: "실험할 때 눈을 보호하기 위해 반드시 착용해야 하는 것은 무엇일까요?",
        answer: "보안경"
    },
    object2: {
        question: "알코올램프의 불을 끌 때, 입으로 불지 않고 무엇을 사용해야 할까요?",
        answer: "뚜껑"
    },
    object3: {
        question: "실험이 끝난 후, 우리 몸에 묻었을지 모르는 해로운 물질을 없애기 위해 반드시 해야 하는 일은 무엇일까요?",
        answer: "손씻기"
    }
};

// HTML 요소 가져오기
const object1 = document.getElementById('object1');
const object2 = document.getElementById('object2');
const object3 = document.getElementById('object3');
const modal = document.getElementById('quiz-modal');
const questionEl = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-answer');
const resultMessage = document.getElementById('result-message');

let currentQuizId = null; // 현재 어떤 오브젝트의 퀴즈가 활성화되었는지 저장

// 오브젝트 클릭 이벤트 리스너 추가
object1.addEventListener('click', () => openModal('object1'));
object2.addEventListener('click', () => openModal('object2'));
object3.addEventListener('click', () => openModal('object3'));

/**
 * 모달을 열고 해당 퀴즈를 설정하는 함수
 * @param {string} quizId - 'object1', 'object2', 'object3' 중 하나
 */
function openModal(quizId) {
    currentQuizId = quizId; // 현재 퀴즈 ID 저장
    questionEl.textContent = quizzes[quizId].question; // 질문 설정
    answerInput.value = ''; // 이전 입력값 초기화
    resultMessage.textContent = ''; // 이전 결과 메시지 초기화
    modal.style.display = 'flex'; // 모달 보이기
}

// 정답 확인 버튼 클릭 이벤트 리스너
submitButton.addEventListener('click', () => {
    if (!currentQuizId) return; // 퀴즈가 선택되지 않았으면 함수 종료

    const userAnswer = answerInput.value.trim(); // 사용자가 입력한 답 (앞뒤 공백 제거)
    const correctAnswer = quizzes[currentQuizId].answer; // 정답

    if (userAnswer === correctAnswer) {
        resultMessage.textContent = "정답입니다! 🎉";
        resultMessage.style.color = 'green';
    } else {
        resultMessage.textContent = `틀렸어요! 정답은 '${correctAnswer}'입니다.`;
        resultMessage.style.color = 'red';
    }
});

// 모달 외부 클릭 시 모달 닫기
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});