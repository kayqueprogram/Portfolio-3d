import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

const iconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const techStack: TechItem[][] = [
  [
    { name: "JavaScript", icon: `${iconBase}/javascript/javascript-original.svg`, url: "https://developer.mozilla.org/docs/Web/JavaScript" },
    { name: "TypeScript", icon: `${iconBase}/typescript/typescript-original.svg`, url: "https://www.typescriptlang.org" },
    { name: "React", icon: `${iconBase}/react/react-original.svg`, url: "https://react.dev" },
    { name: "Next.js", icon: `${iconBase}/nextjs/nextjs-original.svg`, url: "https://nextjs.org" },
    { name: "Node.js", icon: `${iconBase}/nodejs/nodejs-original.svg`, url: "https://nodejs.org" },
    { name: "Python", icon: `${iconBase}/python/python-original.svg`, url: "https://python.org" },
    { name: "Elixir", icon: `${iconBase}/elixir/elixir-original.svg`, url: "https://elixir-lang.org" },
    { name: "Java", icon: `${iconBase}/java/java-original.svg`, url: "https://www.java.com" },
    { name: "C#", icon: `${iconBase}/csharp/csharp-original.svg`, url: "https://learn.microsoft.com/dotnet/csharp/" },
    { name: "C++", icon: `${iconBase}/cplusplus/cplusplus-original.svg`, url: "https://isocpp.org" },
  ],
  [
    { name: "Phoenix", icon: `${iconBase}/phoenix/phoenix-original.svg`, url: "https://www.phoenixframework.org" },
    { name: ".NET", icon: `${iconBase}/dot-net/dot-net-original.svg`, url: "https://dotnet.microsoft.com" },
    { name: "Rust", icon: `${iconBase}/rust/rust-original.svg`, url: "https://www.rust-lang.org" },
    { name: "Kotlin", icon: `${iconBase}/kotlin/kotlin-original.svg`, url: "https://kotlinlang.org" },
    { name: "Go", icon: `${iconBase}/go/go-original-wordmark.svg`, url: "https://go.dev" },
    { name: "PHP", icon: `${iconBase}/php/php-original.svg`, url: "https://php.net" },
    { name: "Spring", icon: `${iconBase}/spring/spring-original.svg`, url: "https://spring.io" },
    { name: "Laravel", icon: `${iconBase}/laravel/laravel-original.svg`, url: "https://laravel.com" },
    { name: "NestJS", icon: `${iconBase}/nestjs/nestjs-original.svg`, url: "https://nestjs.com" },
    { name: "FastAPI", icon: `${iconBase}/fastapi/fastapi-original.svg`, url: "https://fastapi.tiangolo.com" },
    { name: "Django", icon: `${iconBase}/django/django-plain.svg`, url: "https://djangoproject.com" },
    { name: "Flask", icon: `${iconBase}/flask/flask-original.svg`, url: "https://flask.palletsprojects.com" },
  ],
  [
    { name: "Angular", icon: `${iconBase}/angular/angular-original.svg`, url: "https://angular.dev" },
    { name: "Vue.js", icon: `${iconBase}/vuejs/vuejs-original.svg`, url: "https://vuejs.org" },
    { name: "React Native", icon: `${iconBase}/react/react-original.svg`, url: "https://reactnative.dev" },
    { name: "Flutter", icon: `${iconBase}/flutter/flutter-original.svg`, url: "https://flutter.dev" },
    { name: "Dart", icon: `${iconBase}/dart/dart-original.svg`, url: "https://dart.dev" },
    { name: "Swift", icon: `${iconBase}/swift/swift-original.svg`, url: "https://swift.org" },
    { name: "Android", icon: `${iconBase}/android/android-original.svg`, url: "https://developer.android.com" },
    { name: "Electron", icon: `${iconBase}/electron/electron-original.svg`, url: "https://electronjs.org" },
    { name: "Tailwind CSS", icon: `${iconBase}/tailwindcss/tailwindcss-original.svg`, url: "https://tailwindcss.com" },
    { name: "Sass", icon: `${iconBase}/sass/sass-original.svg`, url: "https://sass-lang.com" },
    { name: "Three.js", icon: `${iconBase}/threejs/threejs-original.svg`, url: "https://threejs.org" },
    { name: "Firebase", icon: `${iconBase}/firebase/firebase-plain.svg`, url: "https://firebase.google.com" },
    { name: "Supabase", icon: `${iconBase}/supabase/supabase-original.svg`, url: "https://supabase.com" },
    { name: "PostgreSQL", icon: `${iconBase}/postgresql/postgresql-original.svg`, url: "https://postgresql.org" },
    { name: "MySQL", icon: `${iconBase}/mysql/mysql-original.svg`, url: "https://mysql.com" },
    { name: "MongoDB", icon: `${iconBase}/mongodb/mongodb-original.svg`, url: "https://mongodb.com" },
    { name: "SQLite", icon: `${iconBase}/sqlite/sqlite-original.svg`, url: "https://sqlite.org" },
    { name: "SQL Server", icon: `${iconBase}/microsoftsqlserver/microsoftsqlserver-original.svg`, url: "https://www.microsoft.com/sql-server" },
    { name: "Oracle", icon: `${iconBase}/oracle/oracle-original.svg`, url: "https://oracle.com/database" },
  ],
  [
    { name: "Docker", icon: `${iconBase}/docker/docker-original.svg`, url: "https://docker.com" },
    { name: "Kubernetes", icon: `${iconBase}/kubernetes/kubernetes-original.svg`, url: "https://kubernetes.io" },
    { name: "Terraform", icon: `${iconBase}/terraform/terraform-original.svg`, url: "https://terraform.io" },
    { name: "Ansible", icon: `${iconBase}/ansible/ansible-original.svg`, url: "https://ansible.com" },
    { name: "Helm", icon: `${iconBase}/helm/helm-original.svg`, url: "https://helm.sh" },
    { name: "Redis", icon: `${iconBase}/redis/redis-original.svg`, url: "https://redis.io" },
    { name: "RabbitMQ", icon: `${iconBase}/rabbitmq/rabbitmq-original.svg`, url: "https://rabbitmq.com" },
    { name: "Kafka", icon: `${iconBase}/apachekafka/apachekafka-original.svg`, url: "https://kafka.apache.org" },
    { name: "GraphQL", icon: `${iconBase}/graphql/graphql-plain.svg`, url: "https://graphql.org" },
    { name: "Prisma", icon: `${iconBase}/prisma/prisma-original.svg`, url: "https://prisma.io" },
    { name: "Vite", icon: `${iconBase}/vitejs/vitejs-original.svg`, url: "https://vite.dev" },
    { name: "Bootstrap", icon: `${iconBase}/bootstrap/bootstrap-original.svg`, url: "https://getbootstrap.com" },
    { name: "Git", icon: `${iconBase}/git/git-original.svg`, url: "https://git-scm.com" },
    { name: "Linux", icon: `${iconBase}/linux/linux-original.svg`, url: "https://linux.org" },
    { name: "Vercel", icon: `${iconBase}/vercel/vercel-original.svg`, url: "https://vercel.com" },
  ],
  [
    { name: "AWS", icon: `${iconBase}/amazonwebservices/amazonwebservices-original-wordmark.svg`, url: "https://aws.amazon.com" },
    { name: "Azure", icon: `${iconBase}/azure/azure-original.svg`, url: "https://azure.microsoft.com" },
    { name: "Google Cloud", icon: `${iconBase}/googlecloud/googlecloud-original.svg`, url: "https://cloud.google.com" },
    { name: "Cloudflare", icon: `${iconBase}/cloudflare/cloudflare-original.svg`, url: "https://cloudflare.com" },
    { name: "DigitalOcean", icon: `${iconBase}/digitalocean/digitalocean-original.svg`, url: "https://digitalocean.com" },
    { name: "GitHub", icon: `${iconBase}/github/github-original.svg`, url: "https://github.com" },
    { name: "GitHub Actions", icon: `${iconBase}/githubactions/githubactions-original.svg`, url: "https://github.com/features/actions" },
    { name: "Postman", icon: `${iconBase}/postman/postman-original.svg`, url: "https://postman.com" },
    { name: "Jest", icon: `${iconBase}/jest/jest-plain.svg`, url: "https://jestjs.io" },
    { name: "Cypress", icon: `${iconBase}/cypressio/cypressio-original.svg`, url: "https://cypress.io" },
    { name: "Selenium", icon: `${iconBase}/selenium/selenium-original.svg`, url: "https://selenium.dev" },
    { name: "Figma", icon: `${iconBase}/figma/figma-original.svg`, url: "https://figma.com" },
    { name: "VS Code", icon: `${iconBase}/vscode/vscode-original.svg`, url: "https://code.visualstudio.com" },
  ],
  [
    { name: "Grafana", icon: `${iconBase}/grafana/grafana-original.svg`, url: "https://grafana.com" },
    { name: "Prometheus", icon: `${iconBase}/prometheus/prometheus-original.svg`, url: "https://prometheus.io" },
    { name: "Elasticsearch", icon: `${iconBase}/elasticsearch/elasticsearch-original.svg`, url: "https://elastic.co" },
    { name: "Nginx", icon: `${iconBase}/nginx/nginx-original.svg`, url: "https://nginx.org" },
    { name: "Jenkins", icon: `${iconBase}/jenkins/jenkins-original.svg`, url: "https://jenkins.io" },
  ],
  [
    { name: "TensorFlow", icon: `${iconBase}/tensorflow/tensorflow-original.svg`, url: "https://tensorflow.org" },
    { name: "PyTorch", icon: `${iconBase}/pytorch/pytorch-original.svg`, url: "https://pytorch.org" },
    { name: "Pandas", icon: `${iconBase}/pandas/pandas-original.svg`, url: "https://pandas.pydata.org" },
    { name: "NumPy", icon: `${iconBase}/numpy/numpy-original.svg`, url: "https://numpy.org" },
    { name: "OpenCV", icon: `${iconBase}/opencv/opencv-original.svg`, url: "https://opencv.org" },
    { name: "Jupyter", icon: `${iconBase}/jupyter/jupyter-original.svg`, url: "https://jupyter.org" },
    { name: "Hadoop", icon: `${iconBase}/hadoop/hadoop-original.svg`, url: "https://hadoop.apache.org" },
    { name: "Spark", icon: `${iconBase}/apachespark/apachespark-original.svg`, url: "https://spark.apache.org" },
  ],
  [
    { name: "Neo4j", icon: `${iconBase}/neo4j/neo4j-original.svg`, url: "https://neo4j.com" },
    { name: "MariaDB", icon: `${iconBase}/mariadb/mariadb-original.svg`, url: "https://mariadb.org" },
    { name: "DynamoDB", icon: `${iconBase}/dynamodb/dynamodb-original.svg`, url: "https://aws.amazon.com/dynamodb" },
    { name: "Cassandra", icon: `${iconBase}/cassandra/cassandra-original.svg`, url: "https://cassandra.apache.org" },
    { name: "Debian", icon: `${iconBase}/debian/debian-original.svg`, url: "https://debian.org" },
    { name: "Ubuntu", icon: `${iconBase}/ubuntu/ubuntu-original.svg`, url: "https://ubuntu.com" },
    { name: "Bash", icon: `${iconBase}/bash/bash-original.svg`, url: "https://gnu.org/software/bash" },
    { name: "PowerShell", icon: `${iconBase}/powershell/powershell-original.svg`, url: "https://learn.microsoft.com/powershell" },
  ],
];

const TechStackNew = () => (
  <div className="techstack-new">
    <div className="techstack-video-container">
      <video autoPlay loop muted playsInline className="techstack-video">
        <source src="/video/video.webm" type="video/webm" />
      </video>
      <div className="techstack-overlay"></div>
    </div>

    <div className="techstack-content">
      <h2>Stack técnica</h2>
      <div className="techstack-pyramid">
        {techStack.map((row, rowIndex) => (
          <div key={rowIndex} className="techstack-row">
            {row.map((tech) => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="techstack-item"
                title={tech.name}
                data-cursor="disable"
              >
                <img src={tech.icon} alt="" />
                <span>{tech.name}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TechStackNew;
