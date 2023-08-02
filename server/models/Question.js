const mongoose = require('mongoose');


// 제목, 내용, 투표수, 답변수, 조회수, 저장수, 작성자, 해시태그
const QuestionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    votes: {
      type: Number,
      default: 0,
    },
    answers: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    saves: {
      type: Number,
      default: 0,
    },
    // Login 구현 후 수정 예정 : 작성자는 User의 id를 참조
    // userId: {
    //   type: Number,
    //   required: true,
    // },
    author: {
      type: String,
      required: true,
    },
    hashtags: {
      type: Array,
      required: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// 현재 UTC 시간을 기준으로 한국 시간으로 변환
QuestionSchema.pre('save', function (next) {
  const seoulTime = new Date(this.createdAt).toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
  });
  this.createdAt = new Date(seoulTime);
  next();
});

module.exports = mongoose.model('Question', QuestionSchema);
