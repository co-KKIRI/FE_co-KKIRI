import { Stacks } from "@/types/StackTypes";

export const STACKS: Stacks = {
    "JavaScript": { name: "JavaScript", img: "https://cdn.svgporn.com/logos/javascript.svg", relatedPosition: ["FRONT_END", "BACK_END"] },
    "TypeScript": { name: "TypeScript", img: "https://cdn.svgporn.com/logos/typescript-icon.svg", relatedPosition: ["FRONT_END", "BACK_END"] },
    "React": { name: "React", img: "https://cdn.svgporn.com/logos/react.svg", relatedPosition: ["FRONT_END"] },
    "Vue.js": { name: "Vue.js", img: "https://cdn.svgporn.com/logos/vue.svg", relatedPosition: ["FRONT_END"] },
    "Angular": { name: "Angular", img: "https://cdn.svgporn.com/logos/angular-icon.svg", relatedPosition: ["FRONT_END"] },
    "React Query": { name: "React Query", img: "https://cdn.svgporn.com/logos/react-query-icon.svg", relatedPosition: ["FRONT_END"] },
    "Redux": { name: "Redux", img: "https://cdn.svgporn.com/logos/redux.svg", relatedPosition: ["FRONT_END"] },
    "Node.js": { name: "Node.js", img: "https://cdn.svgporn.com/logos/nodejs-icon.svg", relatedPosition: ["BACK_END"] },
    "Spring": { name: "Spring", img: "https://cdn.svgporn.com/logos/spring-icon.svg", relatedPosition: ["BACK_END"] },
    "Django": { name: "Django", img: "https://cdn.svgporn.com/logos/django-icon.svg", relatedPosition: ["BACK_END"] },
    "Python": { name: "Python", img: "https://cdn.svgporn.com/logos/python.svg", relatedPosition: ["BACK_END", "OTHERS"] }, // AI 포함
    "Java": { name: "Java", img: "https://cdn.svgporn.com/logos/java.svg", relatedPosition: ["BACK_END", "MOBILE"] },
    "MySQL": { name: "MySQL", img: "https://cdn.svgporn.com/logos/mysql-icon.svg", relatedPosition: ["BACK_END"] }, // 데이터베이스
    "MongoDB": { name: "MongoDB", img: "https://cdn.svgporn.com/logos/mongodb-icon.svg", relatedPosition: ["BACK_END"] }, // 데이터베이스
    "PostgreSQL": { name: "PostgreSQL", img: "https://cdn.svgporn.com/logos/postgresql.svg", relatedPosition: ["BACK_END"] }, // 데이터베이스
    "Redis": { name: "Redis", img: "https://cdn.svgporn.com/logos/redis.svg", relatedPosition: ["BACK_END"] }, // 데이터베이스
    "GraphQL": { name: "GraphQL", img: "https://cdn.svgporn.com/logos/graphql.svg", relatedPosition: ["BACK_END", "FRONT_END"] }, // API
    "Kotlin": { name: "Kotlin", img: "https://cdn.svgporn.com/logos/kotlin-icon.svg", relatedPosition: ["BACK_END", "MOBILE"] },
    "Swift": { name: "Swift", img: "https://cdn.svgporn.com/logos/swift.svg", relatedPosition: ["MOBILE"] },
    "Flutter": { name: "Flutter", img: "https://cdn.svgporn.com/logos/flutter.svg", relatedPosition: ["MOBILE"] },
    "React Native": { name: "React Native", img: "https://cdn.svgporn.com/logos/react.svg", relatedPosition: ["MOBILE"] },
    "Figma": { name: "Figma", img: "https://cdn.svgporn.com/logos/figma.svg", relatedPosition: ["OTHERS"] }, // 디자인
    "Adobe XD": { name: "Adobe XD", img: "https://cdn.svgporn.com/logos/adobe-xd.svg", relatedPosition: ["OTHERS"] }, // 디자인
    "AWS": { name: "AWS", img: "https://cdn.svgporn.com/logos/aws.svg", relatedPosition: ["OTHERS"] }, // 클라우드 서비스
    "Docker": { name: "Docker", img: "https://cdn.svgporn.com/logos/docker-icon.svg", relatedPosition: ["OTHERS"] }, // 데브옵스
    "Kubernetes": { name: "Kubernetes", img: "https://cdn.svgporn.com/logos/kubernetes.svg", relatedPosition: ["OTHERS"] }, // 데브옵스
    "Git": { name: "Git", img: "https://cdn.svgporn.com/logos/git-icon.svg", relatedPosition: ["OTHERS"] }, // 버전 관리
    "Jira": { name: "Jira", img: "https://cdn.svgporn.com/logos/jira.svg", relatedPosition: ["OTHERS"] }, // 프로젝트 관리
    "TensorFlow": { name: "TensorFlow", img: "https://cdn.svgporn.com/logos/tensorflow.svg", relatedPosition: ["OTHERS"] }, // AI
    "PyTorch": { name: "PyTorch", img: "https://cdn.svgporn.com/logos/pytorch-icon.svg", relatedPosition: ["OTHERS"] }, // AI
} as const;

export const STACK_NAMES = Object.keys(STACKS);
