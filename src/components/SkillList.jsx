// import the Skills UI component to render the skill list on the page
import Skills from './UI/Skills';

// export the SkillList function to be imported elsewhere
export default function SkillList() {
    // a Skill icon will appear for every image link in the array
    return (
        <Skills
            links={[
                'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg',
                'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg',
                'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg',
                'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg',
                'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Github-Dark.svg',
                'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg',
                'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Npm-Dark.svg',
                'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PostgreSQL-Dark.svg',
                'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg',
                'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Sequelize-Dark.svg',
                'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg',
                'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Vite-Dark.svg',
                'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PHP-Dark.svg',
            ]}
        />
    );
}