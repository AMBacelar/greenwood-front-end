import neo4j from 'neo4j-driver';

let neo4jDriver: any;

const createNeo4jDriver = () =>
  neo4j.driver(
    process.env.NEO4J_URI || 'neo4j://localhost:7687',
    neo4j.auth.basic(
      process.env.NEO4J_USER || 'neo4j',
      process.env.NEO4J_PASSWORD || 'neo4j'
    )
  );

export function initializeNeo4j() {
  const _neo4jDriver = neo4jDriver ? neo4jDriver : createNeo4jDriver();
  if (typeof window === 'undefined') return _neo4jDriver;
  if (!neo4jDriver) neo4jDriver = _neo4jDriver;
  return _neo4jDriver;
}
